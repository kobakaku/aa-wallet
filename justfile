set dotenv-load

setup:
  echo "DISABLE_ENTRY_POINT_V0_6 is $DISABLE_ENTRY_POINT_V0_6"
  echo "DISABLE_ENTRY_POINT_V0_7 is $DISABLE_ENTRY_POINT_V0_7"
  docker compose up -d --wait
