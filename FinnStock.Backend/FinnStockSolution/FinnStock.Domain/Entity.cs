using FinnStock.Domain.Helper;

namespace FinnStock.Domain
{
    public abstract class Entity : ISignature
    {
        public int Id { get; set; }
        public Guid GlobalId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}