import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function testDatabase() {
  const user = await prisma.users;
}
export default async function SignIn() {
  const user = await prisma.users.findMany();
  console.log(user);

  return (
    <div>
      {user.map((e) => e.username)}
      {/* sign in page */}
      <div>
        <h1>Sign In</h1>
        <div>
          <form action="/" method="post">
            <input type="text" name="username" required />
            <input type="password" name="password" required/>
          </form>
        </div>
      </div>
    </div>
  );
}
