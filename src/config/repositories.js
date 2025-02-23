import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import PsychologyIcon from '@mui/icons-material/Psychology';
import SaveIcon from "@mui/icons-material/Save";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TerminalIcon from "@mui/icons-material/Terminal";

export const REPOS = [
  {
    name: "reddacted",
    displayName: "reddacted",
    owner: "taylorwilsdon",
    desc: "ai-powered reddit pii detection & sentiment analysis with redaction",
    Icon: SecurityIcon,
  },
  {
    name: "reclaim",
    displayName: "reclaim",
    owner: "taylorwilsdon",
    desc: "high performance cli disk analysis - find large folders & files ",
    Icon: SaveIcon,
  },
  {
    name: "netbird",
    displayName: "netbird",
    owner: "netbirdio",
    desc: "wireguard overlay networking made easy",
    Icon: CodeIcon,
  },
  {
    name: "homebridge",
    displayName: "homebridge",
    owner: "homebridge",
    desc: "HomeKit support for everything you own",
    Icon: HomeIcon,
  },
  {
    name: "open-webui",
    displayName: "open-webui",
    owner: "open-webui",
    desc: "the gold standard for self hosted llm chat platforms",
    Icon: ChatIcon,
  },
  {
    name: "ollama",
    displayName: "ollama",
    owner: "ollama",
    desc: "llama.cpp wrapper for dead simple llm inference with local models",
    Icon: TerminalIcon,
  },
  {
    name: "GAM",
    displayName: "GAM",
    owner: "GAM-team",
    desc: "cli for google workspace superadmins & friends",
    Icon: AdminPanelSettingsIcon,
  },
  {
    name: "aider",
    displayName: "aider",
    owner: "Aider-AI",
    desc: "pragmatic, interactive ai dev tool for us vim types",
    Icon: SmartToyIcon,
  },
  {
    name: "open-webui-postgres-migration",
    displayName: "Open-WebUI SQLite to PostgreSQL Migration Tool",
    owner: "taylorwilsdon",
    desc: "robust, interactive tool for migrating Open WebUI databases from SQLite to PostgreSQL",
    Icon: MoveUpIcon,
    type: "tool"
  },
  {
    name: "llm-context-limits",
    displayName: "LLM Max Context, Output Limits & Compatibility",
    owner: "taylorwilsdon",
    desc: "missing context limit & parameter support guide for local and hosted LLMs",
    Icon: PsychologyIcon,
    type: "tool"
  },
  {
    name: "ai-chrome-extension",
    displayName: "Chrome Inline AI Extension",
    owner: "taylorwilsdon",
    desc: "simple, lightweight manifest v3 extension - init chat anywhere to open-webui & chatgpt",
    Icon: PsychologyIcon,
    type: "tool"
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
