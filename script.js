const SUPABASE_URL = "https://spemazulkhfyvjqoxqpf.supabase.co";
const SUPABASE_KEY = "sb_publishable_6oMtXN5wRLHMo7ysjh-jsQ_GNsYOLlw";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function loadReviews() {
  const { data, error } = await supabaseClient
    .from("reviews")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  console.log("Reviews:", data);
}

loadReviews();