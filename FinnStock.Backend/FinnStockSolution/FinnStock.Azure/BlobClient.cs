using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace FinnStock.Azure
{
    public class BlobClient
    {
        private readonly BlobServiceClient _blobClient;
        public BlobClient(BlobServiceClient blobClient)
        {
            _blobClient = blobClient;
        }

        public async Task<string>  GetByUserIdAsync(string containerName, string userId)
        {
            var containerClient = _blobClient.GetBlobContainerClient(containerName);

            var blobClient = containerClient.GetBlobClient(userId);

            return blobClient.Uri.AbsoluteUri;
        }

        public async Task<bool> UploadAsync(string containerName, string userId, Stream file)
        {
            var containerClient = _blobClient.GetBlobContainerClient(containerName);

            var blobClient = containerClient.GetBlobClient(userId);

            var blobInfo = await blobClient.UploadAsync(file);

            if (blobInfo != null) return true;

            return false;
        }
    }
}