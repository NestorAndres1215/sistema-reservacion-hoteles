namespace Api.Entities;

public class Usuario
{
    public int Id { get; set; }
    public required string Username { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }
    public string Estado { get; set; } = string.Empty;

    public int RolId { get; set; }

    public DateTime FechaCreacion { get; set; } = DateTime.Now;

    // Navegación
    public Rol Rol { get; set; } = null!;
}
