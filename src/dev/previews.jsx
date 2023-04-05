import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Forms from "../Components/Form/Form";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Forms">
                <Forms/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews