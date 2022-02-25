import { createContext, useEffect, useState } from 'react';

const ComumContext = createContext<ComumProps>({});

interface ComumProps{
    comumUnic?: string
    setComumUnic?: any
}

export function ComumProvider(props: any) {
    const [comumUnic, setComumUnic] = useState('Front');

    return (
        <ComumContext.Provider value={{comumUnic, setComumUnic}}>
            {props.children}
        </ComumContext.Provider>
    )
}

export default ComumContext;