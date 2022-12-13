export async function insertOrder (payload) {
    console.log(payload);
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4";
    const url = "http://localhost:8080/reserve-spot";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }) 
    const data = await res.json()
    return data
}

