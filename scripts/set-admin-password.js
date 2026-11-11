// scripts/set-admin-password.js
// Usage: node scripts/set-admin-password.js "YourNewPasswordHere"
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const newPassword = process.argv[2];

if (!newPassword) {
  console.log('Usage: node scripts/set-admin-password.js "YourNewPasswordHere"');
  process.exit(1);
}

async function main() {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  console.log('Generated bcryptjs hash:', hash);

  // 1. Update .env
  let envContent = fs.readFileSync('.env', 'utf8');
  if (envContent.includes('ADMIN_PASSWORD_HASH=')) {
    envContent = envContent.replace(
      /ADMIN_PASSWORD_HASH=.*/,
      `ADMIN_PASSWORD_HASH="${hash}"`
    );
  } else {
    envContent += `\nADMIN_PASSWORD_HASH="${hash}"\n`;
  }
  fs.writeFileSync('.env', envContent, 'utf8');
  console.log('Updated .env with new hash.');

  // 2. Update Database Settings
  try {
    await prisma.setting.upsert({
      where: { key: 'adminPasswordHash' },
      update: { value: hash },
      create: { key: 'adminPasswordHash', value: hash },
    });

    await prisma.setting.upsert({
      where: { key: 'adminEmail' },
      update: { value: 'saikiranvadla5@gmail.com' },
      create: { key: 'adminEmail', value: 'saikiranvadla5@gmail.com' },
    });
    console.log('Updated Database Setting table successfully.');
  } catch (err) {
    console.warn('Note: Could not write directly to DB table (will use .env):', err.message);
  }

  console.log('\nSuccess! You can now log in at http://localhost:3005/admin/login');
  console.log('Email: saikiranvadla5@gmail.com');
  console.log('Password:', newPassword);
}

main().finally(() => prisma.$disconnect());

