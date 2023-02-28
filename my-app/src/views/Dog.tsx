
import React, { FC } from "react";

interface DogProps {
    src: string;
}

const Dog: FC <DogProps> = ({ src }) => {
    return (
        <div>
            <img src = {src} />
        </div>
    )
}

export default Dog;