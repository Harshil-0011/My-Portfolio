$ErrorActionPreference = "Stop"
$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36"
$cssUrl = "https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700;800&family=Barlow+Semi+Condensed:wght@600;700&family=Overpass+Mono:wght@400;600&display=swap"
$css = Invoke-WebRequest -Uri $cssUrl -Headers @{ "User-Agent" = $ua } -UseBasicParsing
New-Item -ItemType Directory -Force -Path "src\assets\fonts" | Out-Null

$blocks = $css.Content -split "/\* "
$targets = @(
    @{ family = "Barlow";                weight = "500" }
    @{ family = "Barlow";                weight = "600" }
    @{ family = "Barlow";                weight = "700" }
    @{ family = "Barlow";                weight = "800" }
    @{ family = "Barlow Semi Condensed"; weight = "600" }
    @{ family = "Barlow Semi Condensed"; weight = "700" }
    @{ family = "Overpass Mono";         weight = "400" }
    @{ family = "Overpass Mono";         weight = "600" }
)
$slugFor = @{
    "Barlow"                = "barlow"
    "Barlow Semi Condensed" = "barlow-semi-condensed"
    "Overpass Mono"         = "overpass-mono"
}

$done = @()
foreach ($block in $blocks) {
    if ($block -notmatch "^latin\s*\*/") { continue }
    if ($block -notmatch "font-family: '([^']+)'") { continue }
    $family = $Matches[1]
    if ($block -notmatch "font-weight: (\d+)") { continue }
    $weight = $Matches[1]
    if ($block -notmatch "url\((https://[^)]+\.woff2)\)") { continue }
    $url = $Matches[1]
    if ($block -notmatch "unicode-range: U\+0000-00FF") { continue }
    foreach ($t in $targets) {
        if ($t.family -eq $family -and $t.weight -eq $weight) {
            $out = "src\assets\fonts\$($slugFor[$family])-$weight.woff2"
            Invoke-WebRequest -Uri $url -OutFile $out -Headers @{ "User-Agent" = $ua } -UseBasicParsing
            $done += "$out"
        }
    }
}
"Downloaded: $($done.Count)"
$done
