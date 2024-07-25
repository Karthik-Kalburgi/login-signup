import { Button } from "./ui/button";

const Main = () => {
    return (
        <div className="h-full grid md:grid-cols-2">
            <div className="h-full">Pictures</div>
            <div className="h-full flex-center flex-col gap-[80px]">
                <div className="text-4xl font-semibold">
                    Modulo Wardrobe Lab
                </div>
                <Button>Design here</Button>
            </div>
        </div>
    )
}

export default Main;