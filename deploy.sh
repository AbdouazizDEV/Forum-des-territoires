#!/bin/bash
echo "🚀 Déploiement du projet React"
echo ""
echo "📤 Connexion SFTP..."
echo "Vous allez être invité à saisir le mot de passe: |#25|Q|b+@)09cr8dWT@bAC&&)#!"
echo ""

sftp -P 22 su748511@access-5019616033.webspace-host.com << 'SFTP_EOF'
cd public
put -r dist/*
bye
SFTP_EOF

echo ""
echo "✅ Déploiement terminé !"
