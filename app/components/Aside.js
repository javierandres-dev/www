export default function Aside() {
  const d = document,
    $aside = d.createElement("aside"),
    $ads = d.createElement("small"),
    $gsuite = d.createElement("a"),
    $hostgator = d.createElement("a");
  $gsuite.setAttribute("target", "_blank");
  $hostgator.setAttribute("target", "_blank");
  $gsuite.setAttribute("rel", "noopener noreferrer");
  $hostgator.setAttribute("rel", "noopener noreferrer");
  $gsuite.setAttribute(
    "href",
    "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.google.com%2Fappserve%2Fmkt%2Fp%2FAD-FnEyWvp1KZ9eghR27vsEhj50Eu7X9k3pnj1RkYsAfx5zTGFO93jZpYf_InBubeevhRh5wdM3VncW6jY1THpTAB9E5Imj05oKh7jUn&data=04%7C01%7C%7C79a6c2da0305458ec7b508d8a5c695ff%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637441619621155707%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=yMfWV2zIE2HbSABg3Vl8cKEzM5ZWoxh00JG4B8rwQk8%3D&reserved=0"
  );
  $hostgator.setAttribute(
    "href",
    "https://www.hostgator.la/2425-14-1-1464.html"
  );
  $ads.textContent = "Ads";
  $gsuite.textContent = "G Suite";
  $hostgator.textContent = "HostGator";
  $aside.appendChild($ads);
  $aside.appendChild($gsuite);
  $aside.appendChild($hostgator);
  return $aside;
}
