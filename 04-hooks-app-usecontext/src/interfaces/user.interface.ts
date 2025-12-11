import type {
   ContactInterface ,
  ExperienceInterface,
  StatsInterface
  } from "@/interfaces";


export interface UserInterface {
  id: number;
  name: string;
  title: string;
  tags: string[];
  contact: ContactInterface;
  about: string;
  experience: ExperienceInterface[];
  stats: StatsInterface;
  skills: string[];
}