// RESERVE A SPOT
export async function reserve(payload) {
  //console.log(payload);
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  const response = await fetch(
    "https://vjr-foofest.fly.dev/reserve-spot",
    options
  );

  const result = await response.json();
  return result;
}

// FULL RESERVATION
export async function insertOrder(payload) {
  //console.log(payload);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  const response = await fetch(
    "https://vjr-foofest.fly.dev/fullfill-reservation",
    options
  );

  const result = await response.json();
  return result
}
// FULL RESERVATION
export async function postData(payload) {
  //console.log(payload);
  const options = {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4",
      Authentication:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  };
  
  const response = await fetch(
    "https://tdmwbheqhsnbtuazcowv.supabase.co/rest/v1/foofest",
    options
  );

  const result = await response.json();
  return result
}


