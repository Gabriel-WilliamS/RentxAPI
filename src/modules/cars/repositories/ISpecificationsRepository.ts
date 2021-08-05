import { Specification } from "../model/Specification";

interface IcreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: IcreateSpecificationDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}

export { ISpecificationsRepository, IcreateSpecificationDTO };
