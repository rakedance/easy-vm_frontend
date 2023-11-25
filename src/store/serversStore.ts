import { create } from 'zustand'

export interface IVirtualMachine {
    id: number;
    name: string;
    type: string;
    isActive: boolean;
}

export interface IServer {
    id: number;
    name: string;
    host: string;
    port: number;
    virtualMachines: IVirtualMachine [];
}

interface IServersState {
    servers: IServer [];
    isLoading: boolean;
    error: string;
    refreshServers: () => Promise<void>;
    setVirtualMachine: (isActive: boolean, vmId: number, serverId: number) => Promise<void>;
}

export const useServersStore = create<IServersState>((set) => ({
  servers: [],
  isLoading: false,
  error: '',
  refreshServers: async() => {
    try {
        set({isLoading: true});
        const response = await fetch(
          "http://localhost:3000/vms"
        );
        const servers = await response.json();

        set({servers});
      } catch (error) {
        set({ error: (error as Error).message });
      } finally {
        set({ isLoading: false });
      }
  },
  setVirtualMachine: async(isActive, vmId, serverId) => {
    try {
      set({isLoading: true});
      const response = await fetch(
        "http://localhost:3000/vms/" + vmId,
       { method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({isActive, vmId, serverId})}
      );
      const servers = await response.json();
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },
}))
