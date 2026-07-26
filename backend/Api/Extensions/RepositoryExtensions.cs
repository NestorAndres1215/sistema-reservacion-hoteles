using Api.Repositories;
using Api.Repositories.interfaces;

namespace Api.Extensions
{

    public static class RepositoryExtensions
    {
        public static IServiceCollection AddRepositories(
            this IServiceCollection services)
        {
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();

            return services;
        }
    }
}
