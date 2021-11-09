#!/bin/bash

# make global params optional
sed -i '' '/Accept/,/required/ s/true/false/g' openapi/openapi.yaml

# remove old @generated folder
rm -rf src/@generated

export TS_POST_PROCESS_FILE="prettier --write"

# run open api generator
npx openapi-generator-cli generate -i openapi/openapi.yaml -g typescript-axios -o src/@generated --model-name-suffix=Def --generate-alias-as-model --global-property=skipFormModel=false --strict-spec --enable-post-process-file --additional-properties=useSingleRequestParameter=true,supportsES6=true,removeEnumValuePrefix=false,enumPropertyNaming=UPPERCASE

# search and replace enums in the generated files
sed -n 's/^export enum\ \([a-zA-Z0-9]*\)Def {/sed -i '"'"''"'"' '"'"'s\/\1Def\/\1Enum\/g'"'"' src\/\@generated\/*.ts/p' src/@generated/*.ts | bash
