export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Simulate user login logic (replace with your database logic)
    const users = [{ username: "user1", password: "pass1" }];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      res.status(200).json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
