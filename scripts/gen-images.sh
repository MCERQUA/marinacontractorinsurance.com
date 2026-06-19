#!/usr/bin/env bash
# Generate all images for marinacontractorinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/marinacontractorinsurance.com/public/images"
mkdir -p "$OUT"

gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps)..."
    curl -s --max-time 180 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" '{inputs:$p, parameters:{num_inference_steps:$s}}')" \
      -o "$dest"
    local ftype
    ftype=$(file -b "$dest" 2>/dev/null)
    local sz
    sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then
      head -c 200 "$dest"; echo ""
    fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 11 images — marina / marine construction operations ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a marine construction crew driving piles and building a wooden dock over calm coastal water. Workers in hi-vis vests, hard hats and life jackets operating a barge-mounted pile driver, pilings and dock framing in progress, boats and marina in the background. Deep ocean navy and sunset coral tones, high-end commercial marine construction photography, no text, no watermark" 4

gen "dock-construction.jpg" \
  "Photorealistic photo of marine contractors building a wooden dock over water, installing deck boards on a pier frame, a crew member in a hard hat and personal flotation device using power tools, pilings and water below, clear day. Professional marine construction photography, ocean navy and warm sand tones, shallow depth of field, no text" 4

gen "pile-driving.jpg" \
  "Photorealistic photo of a pile driver hammering a large steel pile into the water, barge-mounted crane with leads and hammer, marine crew in hard hats and PFDs guiding the pile, splash and spray, overcast coastal sky. Professional commercial marine construction photography, dramatic industrial, no text" 4

gen "barge-crane.jpg" \
  "Photorealistic photo of a barge-mounted crawler crane lifting materials over water at a marina construction site, crane boom raised, crew on the barge in hi-vis and hard hats, waterfront and boats in the background, bright industrial daylight. Professional marine construction photography, no text" 4

gen "marina-build.jpg" \
  "Photorealistic aerial photo of a marina under construction: new docks and pier fingers being built over water with driven pilings, lumber decking staged, work boats and barges alongside, boats in adjacent slips, sunny coastal day. Professional commercial marine photography, no text" 4

gen "marine-crew.jpg" \
  "Photorealistic professional portrait of a confident marine construction crew of three on a dock, wearing hard hats, safety glasses and personal flotation devices over work shirts, arms crossed or tools in hand, boats and waterfront behind them. Warm genuine trustworthy expression, golden hour light, commercial photography, no text" 4

gen "waterfront-project.jpg" \
  "Photorealistic wide photo of a completed waterfront construction project: a long wooden pier and dock with pilings extending into a coastal bay, cleats and railings installed, boats moored, golden sunset reflecting on the water. Professional commercial marine photography, navy and coral tones, no text" 4

gen "marine-fabrication-shop.jpg" \
  "Photorealistic photo of a marine contractor's upland fabrication yard: dock sections and pier components being assembled on land, lumber and hardware staged, a crew member welding or assembling a dock frame, work trucks in the background, clear day. Professional commercial photography, no text" 4

gen "marine-trucks.jpg" \
  "Photorealistic photo of marine contractor work trucks and a lowboy trailer hauling dock sections and pile materials down a coastal road toward a waterfront launch site, crew cab pickup and heavy trailer, blue sky and water glimpsed ahead. Professional commercial photography, no text" 4

gen "crew-portrait.jpg" \
  "Photorealistic professional portrait of a confident marine construction foreman wearing a hard hat and personal flotation device over a work shirt, arms crossed, standing on a dock with pilings and water behind him. Warm friendly genuine trustworthy expression, golden hour light, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic cinematic wide banner image of a marine construction crew building a dock over water with a barge-mounted pile driver, deep ocean navy and sunset coral tones, professional commercial marine construction photography, wide composition, no text, no watermark" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
