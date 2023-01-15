import {useEffect, useState} from "react";

const useFetch: Function = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>();
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    if (url === "home-test") {
      setResult(
          {
            "imageUrl": "data:image/png;base64,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",
            "restaurantName": "Shake Shack",
            "seatId": "B3",
          }
      )
      setIsLoading(false);
      return;
    }
    if (url === "order-test") {
      setResult(
          {
            data: [
              {
                "sushi": [
                  {
                    "dish": "Salmon Sushi",
                    "price": 66,
                    "imgUrl": "https://izzycooking.com/wp-content/uploads/2020/10/Salmon-Nigiri-thumbnail-500x500.jpg"
                  },
                  {
                    "dish": "Toro Sushi",
                    "price": 44,
                    "imgUrl": "https://izzycooking.com/wp-content/uploads/2020/10/Salmon-Nigiri-thumbnail-500x500.jpg"
                  },

                ]
              },
              {
                "shashimi": [
                  {
                    "dish": "Salmon shashimi",
                    "price": 666,
                    "imgUrl": "https://izzycooking.com/wp-content/uploads/2020/10/Salmon-Nigiri-thumbnail-500x500.jpg"
                  },
                  {
                    "dish": "Toro shashimi",
                    "price": 434,
                    "imgUrl": "https://izzycooking.com/wp-content/uploads/2020/10/Salmon-Nigiri-thumbnail-500x500.jpg"
                  },

                ]
              },
            ]
          }
      )
      setIsLoading(false);
      return;
    }
    fetch(url)
        .then((res) => res.json())
        .then((json) => setResult(json))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
  }, [url])

  return {result, error, isLoading}
}

export default useFetch;