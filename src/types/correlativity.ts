export interface Correlativity {
  id: string;
  order?: number;
  name: string;
  prerequisites: string[];
  prerequisiteSummary?: string;
  isPassed: boolean;
  hours: number;
}
