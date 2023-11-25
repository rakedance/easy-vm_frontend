import { useEffect } from "react";

import { ServerParkList } from "../components/ServerParkList/ServerParkList"
import { useServersStore } from "../store/serversStore"

export const Main = () => {
    const {servers, refreshServers} = useServersStore();

    useEffect(() => {
        refreshServers();
    }, [refreshServers])

    return <ServerParkList servers={servers} />
}
