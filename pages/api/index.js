import axios from "axios";
import { getCookie } from "cookies-next";

export async function loadSkills() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/skill/static`
  );

  return response.data.data;
}
export async function loadCarousel() {
  const token = getCookie("token");

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/worker`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // withCredentials: true,
    }
  );

  console.log(res.data.data);
  return res.data.data;
}
