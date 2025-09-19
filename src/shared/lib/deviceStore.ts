import { create } from 'zustand';

export type DeviceType = 'mobile' | 'desktop';

type DeviceState = {
    deviceType: DeviceType;
    setDeviceType: (t: DeviceType) => void;
};

export const useDeviceStore = create<DeviceState>((set) => ({
    deviceType: 'desktop',
    setDeviceType: (t) => set({ deviceType: t }),
}));