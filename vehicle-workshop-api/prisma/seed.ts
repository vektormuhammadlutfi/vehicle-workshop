import { prisma } from "../src/libs/prisma";

async function main() {
  // Seed Customers
  const customer1 = await prisma.customer.create({
    data: {
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      phoneNumber: "1234567890",
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: "Jane Smith",
      username: "janesmith",
      email: "jane@example.com",
      phoneNumber: "0987654321",
    },
  });

  // Seed Vehicle Brands
  const toyota = await prisma.vehicleBrand.create({
    data: {
      name: "Toyota",
    },
  });

  const ford = await prisma.vehicleBrand.create({
    data: {
      name: "Ford",
    },
  });

  // Seed Vehicle Models
  const camry = await prisma.vehicleModel.create({
    data: {
      name: "Camry",
      brandId: toyota.id,
    },
  });

  const mustang = await prisma.vehicleModel.create({
    data: {
      name: "Mustang",
      brandId: ford.id,
    },
  });

  // Seed Vehicle Types
  const sedan = await prisma.vehicleType.create({
    data: {
      name: "Sedan",
      modelId: camry.id,
    },
  });

  const coupe = await prisma.vehicleType.create({
    data: {
      name: "Coupe",
      modelId: mustang.id,
    },
  });

  // Seed Vehicle Colors
  await prisma.vehicleColor.create({
    data: {
      name: "Red",
      typeId: coupe.id,
    },
  });

  await prisma.vehicleColor.create({
    data: {
      name: "Blue",
      typeId: sedan.id,
    },
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
