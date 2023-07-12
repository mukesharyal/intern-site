import { createRoot } from 'react-dom/client'; // As we only use the createRoot function
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); 

root.render(<App />);

