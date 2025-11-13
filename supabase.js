const SUPABASE_URL = "https://jwcgiuhdugjunndfpdjr.supabase.co";  // Reemplaza con tu URL
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Y2dpdWhkdWdqdW5uZGZwZGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTA2NTQsImV4cCI6MjA3ODUyNjY1NH0.llknOTpK1hFMDOjdyDUKUFuiyr0NwwJzNv6YdJbBsRY";                          // Reemplaza con tu clave anónima

// Crear el cliente global
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Comprobación opcional
(async () => {
  try {
    const { data, error } = await supabaseClient.from("solicitudes").select("id").limit(1);
    if (error) throw error;
    console.log("✅ Conectado correctamente a Supabase");
  } catch (err) {
    console.error("❌ Error al conectar:", err);
  }
})();
