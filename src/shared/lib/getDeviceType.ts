import { headers } from 'next/headers';
import { userAgent } from 'next/server';
import type { DeviceType } from './deviceStore';

export async function getDeviceType(): Promise<DeviceType> {
    const h = await headers();
    const { device } = userAgent({ headers: h });
    return device?.type === 'mobile' ? 'mobile' : 'desktop';
}
