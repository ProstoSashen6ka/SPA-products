import { Loader } from "lucide-react"
import { useGetProductsQuery } from "../../app/fakestore/fakestore.api"
import Card from "../../components/card/Card"

export default function Products(){

    const { data, isError, isLoading } = useGetProductsQuery()

    return(
        <div>
            {isError && <p className = "text-center text-red-600">Something went wrong...</p>}
            {isLoading && <Loader className="animate-spin" />}
            <div className="grid grid-cols-4">
                {data?.map(product => (
                    <Card product={product} />
                ))}
            </div>
        </div>
    )
}