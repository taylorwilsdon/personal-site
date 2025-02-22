import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TerminalIcon from "@mui/icons-material/Terminal";

export const REPOS = [
  {
    name: "reddacted",
    owner: "taylorwilsdon",
    desc: "ai-powered reddit comment pii detection & sentiment analysis with redaction",
    Icon: SecurityIcon,
  },
  {
    name: "reclaim",
    owner: "taylorwilsdon",
    desc: "high performance cli disk analysis tool to find large folders & files ",
    Icon: SecurityIcon,
  },
  {
    name: "netbird",
    owner: "netbirdio",
    desc: "wireguard overlay networking made easy",
    Icon: CodeIcon,
  },
  {
    name: "homebridge",
    owner: "homebridge",
    desc: "HomeKit support for everything you own",
    Icon: HomeIcon,
  },
  {
    name: "open-webui",
    owner: "open-webui",
    desc: "the gold standard for self hosted llm chat platforms",
    Icon: ChatIcon,
  },
  {
    name: "ollama",
    owner: "ollama",
    desc: "llama.cpp wrapper for dead simple llm inference with local models",
    Icon: TerminalIcon,
  },
  {
    name: "GAM",
    owner: "GAM-team",
    desc: "cli for google workspace superadmins & friends",
    Icon: AdminPanelSettingsIcon,
  },
  {
    name: "aider",
    owner: "Aider-AI",
    desc: "pragmatic, interactive ai dev tool for us vim types",
    Icon: SmartToyIcon,
  },
];

export const GITHUB_COLORS = {
  text: {
    primary: "#24292e",
    secondary: "#586069",
  },
  border: "#e1e4e8",
  background: {
    card: "#ffffff",
    chip: "#f6f8fa",
  },
  hover: "#0366d6",
};
