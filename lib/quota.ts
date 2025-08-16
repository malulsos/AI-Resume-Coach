// Simple in-memory quota for demo purposes (resets on server restart)
const store = new Map<string, { uploads:number; tailor:number; interviewQs:number }>();
export function getQuota(userId: string){
  if (!store.has(userId)) store.set(userId, { uploads:0, tailor:0, interviewQs:0 });
  return store.get(userId)!;
}
export function inc(userId: string, key: keyof ReturnType<typeof getQuota>){
  const q = getQuota(userId); q[key] += 1; return q;
}
export function withinFreeLimits(q:{uploads:number; tailor:number; interviewQs:number}){
  return q.uploads <= 1 && q.tailor <= 1 && q.interviewQs <= 5;
}
