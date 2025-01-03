import { ThumbsUp, Trash2 } from "lucide-react";
import { Root } from "../../app/types/products.type";

export default function Card({product} : {product: Root}){
    return(
        <div key={product.id} className="border border-slate-500 hover:border-indigo-500">
            <img
                  src={product.image}
                  alt={product.title}
                  className="h-40"
            />
            <div>{product.description.slice(0, 40)}...</div>
            <div className="flex justify-between">
                <ThumbsUp />
                <Trash2 />
            </div>
        </div>
    )
}