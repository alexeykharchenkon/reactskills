using Microsoft.EntityFrameworkCore;

namespace reactskillsback.Models
{
    public class ItemContext: DbContext
    {
        public ItemContext(DbContextOptions<ItemContext> options)
           : base(options)
        {
           // Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Item>().HasData(new Item[] {
                new Item { Id = 1, Title = "Title 1", Text = "Text 1", IsChecked = false },
                new Item { Id = 2, Title = "Title 2", Text = "Text 2", IsChecked = false },
                new Item { Id = 3, Title = "Title 3", Text = "Text 3", IsChecked = false },
                }
            );
        }
    }
}
