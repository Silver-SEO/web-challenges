import dbConnect from "@/db/connect";
import product from "@db/models/products";

export default function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  const product = products.find((product) => product.id === id);

  if (!product) {
    response.status(404).json({ status: "Not Found" });
    return;
  }

  response.status(200).json(product);
}
