package keeper_test

import (
	"testing"

	testkeeper "github.com/stafihub/stafihub/testutil/keeper"
	"github.com/stafihub/stafihub/x/claim/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ClaimKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
