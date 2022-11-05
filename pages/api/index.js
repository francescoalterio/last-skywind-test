export default function home(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 67 }));
}