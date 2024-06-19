namespace MoskeeBackend.Services
{
    public class EmailTemplate
    {
        public async Task<string> GetEmailTemplateAsync(string templateName)
        {
            var templatePath = Path.Combine(Directory.GetCurrentDirectory(), "EmailTemplates", templateName);
            return await File.ReadAllTextAsync(templatePath);
        }

        public string PopulateTemplate(string template, dynamic data)
        {
            foreach (var property in data.GetType().GetProperties())
            {
                template = template.Replace($"{{{property.Name}}}", property.GetValue(data, null)?.ToString());
            }
            return template;
        }
    }
}
