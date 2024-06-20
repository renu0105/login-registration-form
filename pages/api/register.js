export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const users = [{ username: "user1", password: "pass1" }];
    users.push({ username, password });
    res.status(200).json({ message: "successfully register" });
  } else {
    res.status(403).json({ message: "method not allowed" });
  }
}
