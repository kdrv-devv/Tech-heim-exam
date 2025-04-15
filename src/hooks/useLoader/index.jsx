import { Skeleton } from "antd"




export const useLoader =()=>{
    const newProductsLoader =()=>{
            return (
                <>
                    {
                        Array.from({length:4}).map(()=>  <div className="flex flex-col gap-4">
                        <Skeleton.Image className="!w-full !h-[300px]"/>
                        <Skeleton.Input className="!w-full "/>
                        <Skeleton.Input className="!w-full "/>
                    </div>)
                    }
                </>
            )

    }

    return {newProductsLoader}
}