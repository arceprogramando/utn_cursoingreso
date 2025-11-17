export interface Correlativity {
  id: string;
  order?: number;
  name: string;
  prerequisites: string[];
  isPassed: boolean;
  hours: number;
}
