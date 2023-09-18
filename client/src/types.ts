export interface EventObj {
    id:number;
    actor: employee;
    target: employee|null;
    action: action;
    time: Date;
  }

export interface employee{
    id: number;
    name: string;
    email: string;
    position: string|null;
  }
export interface action{
  id: number;
  name: string;
  description: string|null;
}