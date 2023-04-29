namespace FinnStock.Domain
{
    public abstract class Entity
    {
        public int Id { get; set; }
        public Guid GlobalId { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }

    }
}