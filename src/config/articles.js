import acImage from '../images/ac.jpg';
import functionCard from '../images/function_card.png';
import mediumCard from '../images/medium_card.png';
import nytCard from '../images/nyt_card.png';
import owuiCard from '../images/owui-ha-card.png';
import reclaimedImage from '../images/reclaimed-card.png';
import summitCard from '../images/summit_card.png';
import ventImage from '../images/vent.png';

export const articles = [
  {
    href: "https://www.slideshare.net/slideshow/jira-ansible-streamlining-jira-server-administration-for-the-enterprise/141838330",
    image: summitCard,
    alt: "Atlassian Summit",
    subtitle: "Scaling Jira Server for the Enterprise via IaC",
    title: "Atlassian Summit - Jira & Ansible",
    description: "Featured Speaker at Atlassian Summit 2019 in Las Vegas, covering the technical architecture that allowed Yelp to smoothly administrate Jira at scale with Ansible"
  },
    {
    href: "https://taylorwilsdon.medium.com/the-sres-guide-to-high-availability-open-webui-deployment-architecture-2ee42654eced",
    image: owuiCard,
    alt: "High Availability Architecture for Open WebUI",
    subtitle: "The SRE’s Guide to Deployment Architecture",
    title: "High Availability for Open WebUI",
    description: "When you're ready to graduate from single container deployment to a distributed HA architecture for Open WebUI, this is the guide for you!"
  },
    {
    href: "https://taylorwilsdon.medium.com/the-missing-guide-to-native-tool-function-calling-with-mcp-openapi-servers-ed2557a8a7b7",
    image: functionCard,
    alt: "LLM Native Tool & Function Calling",
    title: "LLM Native Tool & Function Calling",
    subtitle: "Building Tools that “Just Work”",
    description: "A pragmatic guide to the best practices for Native Tool & Function Calling Response Structure with MCP & OpenAPI Servers to ensure broad compatibility"
  },
  {
    href: "https://medium.com/@tbarrettwilsdon/multi-gig-for-the-masses-building-an-inexpensive-10gbe-network-for-the-home-cfe91740f186",
    image: mediumCard,
    alt: "Multi-Gig for the Masses",
    title: "Multi-Gig for the Masses",
    subtitle: "Building an inexpensive 10GbE network",
    description: "Thoughts on design and component selection for a multi-gigabit LAN (2.5/5/10GbE) based on my experiences building my home network architecture"
  },
  {
    href: "https://medium.com/@tbarrettwilsdon/smart-zoned-nyc-steam-radiators-effectively-controlling-one-pipe-steam-heat-in-apartments-304a2ed2cd1b",
    image: ventImage,
    alt: "Smart Steam Heat",
    title: "Smart Zoned Steam Radiators",
    subtitle: "Modernizing control of one pipe steam heat",
    description: "A look into the misadventures and solutions as I implemented smart, individual zone control for my NYC apartment's cast iron one pipe steam radiators"
  },
  {
    href: "https://taylorwilsdon.medium.com/in-the-pursuit-of-a-more-refined-window-ac-installation-building-in-midea-u-shape-inverter-splits-9bd3b83b0351",
    image: acImage,
    alt: "Air Conditioner",
    title: "In the pursuit of a more refined window AC installation",
    subtitle: "Building in Midea U-Shape Inverter Splits",
    description: "Building, insulating and finishing the closest thing to a true mini split for a clean, silent installation"
  },
  {
    href: "https://taylorwilsdon.medium.com/quickly-free-up-disk-space-on-your-pc-mac-or-linux-system-using-reclaimed-5003c19f7c08",
    image: reclaimedImage,
    alt: "Reclaimed",
    title: "Disk Space Analysis & Cleanup with Reclaimed",
    subtitle: "Using powerful open source tools to make the most of your storage",
    description: "Quickly Free Up Disk Space on Your PC, Mac, or Linux System Using Reclaimed"
  },
  {
    href: "https://www.nytimes.com/interactive/2022/02/17/realestate/17hunt-wilsdon.html",
    image: nytCard,
    alt: "NYT - The Hunt",
    subtitle: "The New York Times",
    title: "Real Estate > The Hunt",
    description: "Interview with Joyce Cohen of the New York Times for The Hunt, focused on our experience finding our New York City home"
  }
];
