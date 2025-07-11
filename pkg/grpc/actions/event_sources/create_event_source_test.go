package eventsources

import (
	"context"
	"testing"

	uuid "github.com/google/uuid"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/superplanehq/superplane/pkg/config"
	"github.com/superplanehq/superplane/pkg/crypto"

	protos "github.com/superplanehq/superplane/pkg/protos/superplane"
	"github.com/superplanehq/superplane/test/support"
	testconsumer "github.com/superplanehq/superplane/test/test_consumer"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const EventSourceCreatedRoutingKey = "event-source-created"

func Test__CreateEventSource(t *testing.T) {
	r := support.SetupWithOptions(t, support.SetupOptions{})
	encryptor := &crypto.NoOpEncryptor{}

	t.Run("canvas does not exist -> error", func(t *testing.T) {
		// Create EventSource with nested metadata structure
		eventSource := &protos.EventSource{
			Metadata: &protos.EventSource_Metadata{
				Name: "test",
			},
		}

		req := &protos.CreateEventSourceRequest{
			CanvasIdOrName: uuid.New().String(),
			EventSource:    eventSource,
		}

		_, err := CreateEventSource(context.Background(), encryptor, req)
		s, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.InvalidArgument, s.Code())
		assert.Equal(t, "canvas not found", s.Message())
	})

	t.Run("name still not used -> event source is created", func(t *testing.T) {
		amqpURL, _ := config.RabbitMQURL()
		testconsumer := testconsumer.New(amqpURL, EventSourceCreatedRoutingKey)
		testconsumer.Start()
		defer testconsumer.Stop()

		// Create EventSource with nested metadata structure
		eventSource := &protos.EventSource{
			Metadata: &protos.EventSource_Metadata{
				Name: "test",
			},
		}

		response, err := CreateEventSource(context.Background(), encryptor, &protos.CreateEventSourceRequest{
			CanvasIdOrName: r.Canvas.Name,
			EventSource:    eventSource,
		})

		require.NoError(t, err)
		require.NotNil(t, response)
		require.NotNil(t, response.EventSource)
		assert.NotEmpty(t, response.EventSource.Metadata.Id)
		assert.NotEmpty(t, response.EventSource.Metadata.CreatedAt)
		assert.NotEmpty(t, response.Key)
		assert.Equal(t, "test", response.EventSource.Metadata.Name)
		assert.Equal(t, r.Canvas.ID.String(), response.EventSource.Metadata.CanvasId)
		assert.True(t, testconsumer.HasReceivedMessage())
	})

	t.Run("name already used -> error", func(t *testing.T) {
		// Create EventSource with nested metadata structure
		eventSource := &protos.EventSource{
			Metadata: &protos.EventSource_Metadata{
				Name: "test",
			},
		}

		_, err := CreateEventSource(context.Background(), encryptor, &protos.CreateEventSourceRequest{
			CanvasIdOrName: r.Canvas.Name,
			EventSource:    eventSource,
		})

		s, ok := status.FromError(err)
		assert.True(t, ok)
		assert.Equal(t, codes.InvalidArgument, s.Code())
		assert.Equal(t, "name already used", s.Message())
	})
}
