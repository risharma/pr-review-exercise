@Entity()
export class User {
  @PrimaryColumn()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  admin: boolean;

  @Column()
  location: string;
}


@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  productId: string;
}

@Entity()
export class Preferences {
  @PrimaryGeneratedColumn()
  email: string;

  @Column()
  notificationEnabled: string;
}
