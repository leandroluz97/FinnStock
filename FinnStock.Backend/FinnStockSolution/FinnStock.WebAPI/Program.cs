using FinnStock.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Configured CORS
builder.Services.AddCors((options) => {
    options.AddDefaultPolicy((builder) => {
        builder.WithOrigins("http://localhost:3000");
    });
});


builder.Services.ConfigureServices(builder.Configuration);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();  

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHsts();
app.UseHttpsRedirection();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
