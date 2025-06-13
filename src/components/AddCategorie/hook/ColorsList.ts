import { useEffect, useState } from "react";

type ColorsListProps = {
  id: number;
  nameColor: string;
  fontColor: string;
  backgroundColor: string;
};

function useColorList() {
  const [colors, setColors] = useState<ColorsListProps[]>([]);

  useEffect(() => {
    const fetchColors = async () => {
      await fetch("http://localhost:5012/api/v1/colors")
        .then((res) => res.json())
        .then((data: ColorsListProps[]) => setColors(data));
    };

    fetchColors();
  }, []);

  return colors;
}

export default useColorList;
